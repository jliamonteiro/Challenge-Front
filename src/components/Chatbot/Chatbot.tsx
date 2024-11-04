"use client"
import { useEffect } from 'react';

export default function Chatbot() {
  useEffect(() => {
    // Definindo as opções do Watson Assistant
    (window as any).watsonAssistantChatOptions = {
      integrationID: "b282140d-9ec1-4e31-b233-356034ce8636", // ID da integração
      region: "us-south", // Região da integração
      serviceInstanceID: "4895944c-12f0-4b43-9a58-2390e3fc6fd0", // ID da instância do serviço
      onLoad: async (instance: any) => {
        await instance.render();
      },
    };

    // Função para carregar o script do Watson Assistant
    const script = document.createElement('script');
    script.src = `https://web-chat.global.assistant.watson.appdomain.cloud/versions/${
      (window as any).watsonAssistantChatOptions.clientVersion || 'latest'
    }/WatsonAssistantChatEntry.js`;
    script.async = true;
    document.head.appendChild(script);

    // Limpeza do efeito ao desmontar o componente
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null; // Esse componente não precisa renderizar nada na tela
}
