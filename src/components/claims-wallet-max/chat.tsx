import React, { useState, useRef, useEffect } from 'react';

// Chat Message Interface
interface ChatMessage {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
}

// Chat Component
// export const BerryChat: React.FC = () => {
export function BerryChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      content: "Hello! I'm Berry 👋",
      isBot: true,
      timestamp: new Date(),
    },
    {
      id: '2',
      content:
        'I am here to help insurance companies like yours with our comprehensive solutions for managing incoming and outgoing payments.',
      isBot: true,
      timestamp: new Date(),
    },
    {
      id: '3',
      content:
        'If you have any questions or need assistance, feel free to ask.',
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [inputValue]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: inputValue.trim(),
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: getBotResponse(inputValue.trim()),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    if (
      input.includes('payment') ||
      input.includes('transfer') ||
      input.includes('money')
    ) {
      return 'I can help you with payment solutions! We offer virtual cards, ACH transfers, eChecks, and direct card payments. What specific payment method interests you?';
    } else if (input.includes('wallet') || input.includes('balance')) {
      return 'Your Claims Wallet allows you to manage your funds efficiently. You can transfer money to various payment methods or keep it in your wallet for future use.';
    } else if (input.includes('help') || input.includes('support')) {
      return "I'm here to help! You can ask me about payment methods, wallet features, transfers, or any other questions about our financial services.";
    } else if (input.includes('hello') || input.includes('hi')) {
      return 'Hello! Great to meet you! How can I assist you with your financial needs today?';
    } else if (input.includes('thank')) {
      return "You're very welcome! Is there anything else I can help you with today?";
    } else {
      return "That's an interesting question! For specific inquiries, I recommend speaking with one of our specialists who can provide detailed information tailored to your needs. Is there anything else about our payment solutions I can help clarify?";
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-14 z-50" style={{ right: '20px' }}>
      <div
        className={`chat-window-wrapper transition-all duration-300 ease-in-out ${
          isOpen
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 w-80 h-96 flex flex-col overflow-hidden">
          {/* Chat Header */}
          <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <div>
              <h1 className="font-semibold text-lg">Berry Assistant</h1>
              <p className="text-blue-100 text-sm">Juice Financial</p>
            </div>
            <button
              onClick={toggleChat}
              className="text-white hover:text-blue-200 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Chat Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 dark:bg-gray-900">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.isBot ? 'justify-start' : 'justify-end'
                }`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    message.isBot
                      ? 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600'
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-gray-700 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: '0.1s' }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: '0.2s' }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Footer */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-3">
            <div className="flex space-x-2">
              <textarea
                ref={textareaRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your question..."
                className="flex-1 resize-none rounded-lg px-3 py-2 text-sm focus:outline-none dark:bg-gray-700 dark:text-white min-h-[36px] max-h-20"
                rows={1}
              />
              <button
                onClick={sendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="text-black p-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="m2 21l21-9L2 3v7l15 2l-15 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleChat}
        className={`bg-blue-600 hover:bg-blue-700 right-8 bottom-6 fixed text-white p-4 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? 'rotate-0' : 'rotate-0 hover:scale-110'
        }`}
      >
        {isOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3c5.5 0 10 3.58 10 8s-4.5 8-10 8c-1.24 0-2.43-.18-3.53-.5C5.55 21 2 21 2 21c2.33-2.33 2.7-3.9 2.75-4.5C3.05 15.07 2 13.13 2 11c0-4.42 4.5-8 10-8" />
          </svg>
        )}
      </button>
    </div>
  );
}
