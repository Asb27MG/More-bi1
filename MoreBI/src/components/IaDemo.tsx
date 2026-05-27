import { FormEvent, useEffect, useRef, useState } from 'react'
import './IaDemo.css'

const SUGGESTIONS = [
  { label: 'Analiza mis ventas del último trimestre', value: 'Analiza mis ventas del último trimestre' },
  { label: 'Predice tendencias para el próximo año', value: 'Predice tendencias para el próximo año' },
  { label: 'Optimiza mi proceso de manufactura', value: 'Optimiza mi proceso de manufactura' },
  { label: 'Genera un reporte de ROI', value: 'Genera un reporte de ROI' },
  { label: 'Estado de robots activos', value: 'Estado de robots activos' },
]

type ChatMessage = {
  sender: 'user' | 'ai'
  text: string
  time: string
}

const getTimeStamp = () =>
  new Date().toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
  })

const API_CHAT_URL = import.meta.env.VITE_API_BASE_URL
  ? `${import.meta.env.VITE_API_BASE_URL.replace(/\/+$/, '')}/api/chat`
  : '/api/chat'

export default function IaDemo() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'ai',
      text: 'Hola, soy tu asistente IA de MORE BI. Puedo ayudarte con analítica, predicciones y automatización. ¿Qué quieres analizar hoy?',
      time: getTimeStamp(),
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement | null>(null)
  const messagesContainerRef = useRef<HTMLDivElement | null>(null)
  const isFirstRender = useRef(true)

  useEffect(() => {
    // No hacer scroll en el primer render (solo está el mensaje de saludo).
    // Esto evita que la página salte a la sección de demo al cargar.
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    // Hacer scroll SOLO dentro del contenedor del chat, no del viewport completo,
    // para que nunca arrastre toda la página.
    const container = messagesContainerRef.current
    if (container) {
      container.scrollTop = container.scrollHeight
    }
  }, [messages])

  const addMessage = (message: ChatMessage) => {
    setMessages((prev) => [...prev, message])
  }

  const sendMessage = async (text: string) => {
    if (!text.trim()) return
    setError(null)
    addMessage({ sender: 'user', text, time: getTimeStamp() })
    setInput('')
    setLoading(true)

    try {
      const response = await fetch(API_CHAT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mensaje: text }),
      })

      if (!response.ok) {
        throw new Error('No se pudo conectar con la IA')
      }

      const data = await response.json()
      addMessage({
        sender: 'ai',
        text: data.reply || 'No obtuve respuesta del modelo.',
        time: getTimeStamp(),
      })
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error desconocido'
      setError(message)
      addMessage({
        sender: 'ai',
        text: 'Error de conexión con la IA. Verifica que el backend esté encendido o configura VITE_API_BASE_URL.',
        time: getTimeStamp(),
      })
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (loading || !input.trim()) return
    sendMessage(input.trim())
  }

  return (
    <section id="ia-demo" className="section bg-surface-low">
      <div className="container-page">
        <div className="card-neo overflow-hidden">
          <div className="ia-demo-header bg-surface-card border-b border-line px-6 py-6">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-violet-200">
                Demo IA
              </p>
              <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
                Asistente inteligente para tu negocio
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-[12px] font-semibold text-ink-dim">
              <span className="h-2 w-2 rounded-full bg-ok" />
              Online
            </div>
          </div>

          <div className="ia-chat-window p-6">
            <div ref={messagesContainerRef} className="ia-messages max-h-[520px] space-y-5 overflow-y-auto rounded-[1.5rem] border border-line bg-surface-card p-5 shadow-neo">
              {messages.map((message, index) => (
                <div
                  key={`${message.sender}-${index}`}
                  className={`flex gap-4 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full border ${
                      message.sender === 'user'
                        ? 'border-violet bg-violet/10 text-violet'
                        : 'border-line bg-surface-low text-ink-dim'
                    }`}
                  >
                    {message.sender === 'user' ? '👤' : '🤖'}
                  </div>
                  <div className="max-w-[75%] text-left">
                    <div
                      className={`rounded-[1.5rem] border px-5 py-4 text-sm leading-7 ${
                        message.sender === 'user'
                          ? 'border-violet/30 bg-violet/10 text-ink'
                          : 'border-line bg-surface-high text-ink-dim'
                      }`}
                    >
                      {message.text}
                    </div>
                    <p className="mt-2 text-[12px] text-ink-dim">{message.time}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {SUGGESTIONS.map((item) => (
                <button
                  key={item.value}
                  type="button"
                  className="rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink-dim transition hover:border-violet hover:text-violet-200"
                  onClick={() => sendMessage(item.value)}
                  disabled={loading}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4 sm:flex-row">
              <label className="sr-only" htmlFor="ia-input">
                Escribe tu consulta analítica
              </label>
              <input
                id="ia-input"
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Escribe tu consulta analítica..."
                className="input w-full flex-1 border-line bg-surface-low px-4 py-3 text-sm text-ink placeholder:text-ink-mute focus:border-violet focus:ring-2 focus:ring-violet/20"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="btn-primary w-full whitespace-nowrap px-6 py-3 text-[14px] sm:w-auto"
              >
                {loading ? 'Enviando...' : 'Enviar'}
              </button>
            </form>

            {error ? (
              <p className="mt-4 text-sm text-danger">{error}</p>
            ) : (
              <p className="mt-4 text-sm text-ink-dim">
                Conecta con Groq para recibir respuestas reales en tu flujo de trabajo.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
