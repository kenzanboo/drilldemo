"use client";

import PersonaClient from "@sindarin/persona";
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react";


// TODO move this to a .env file
// const personaClient = new PersonaClient(process.env.NEXT_PUBLIC_PERSONA_CLIENT_KEY!);
const tempDevKey = '96524664-e81e-48cb-8528-b7b0bf713d20';
const personaClient = new PersonaClient(tempDevKey);

let chatActive = false;


const handleStartChatButtonClick = async () => {
  // Example config using a persona defined in the Playground; there are many ways to do things!
  const config = {
    userId: "admin",
    personaName: "Concierge",
    options: {
      debugMode: true,
      streamTranscripts: true,
      shouldNotSaveConversation: true,
    },
  };

  try {
    await personaClient.init(config);
    configurePersonaEvents();
    chatActive = true;
  } catch (error) {
    console.log(error);
  }
};

const handlePauseChatButtonClick = async () => {
  try {
    await personaClient.pause();
  } catch (error) {
    console.log(error);
  }
};

const handleResumeChatButtonClick = async () => {
  try {
    await personaClient.resume();
  } catch (error) {
    console.log(error);
  }
};

const handleStopChatButtonClick = async () => {
  try {
    await personaClient.end();
    chatActive = false;
  } catch (error) {
    console.log(error);
  }
};

const handleUpdateState = async (newState: any) => {
  try {
    personaClient.updateState(newState);
  } catch (error) {
    console.log(error);
  }
};

const handleReactTo = async (thought: any) => {
  try {
    personaClient.reactTo(thought);
  } catch (error) {
    console.log(error);
  }
};

const configurePersonaEvents = () => {
  personaClient.on("messages_update", (messages) => {
    console.log(messages);
  });

  personaClient.on("state_updated", (newState) => {
    console.log(newState);
  })

  personaClient.on("action", (action) => {
    console.log(action);
  })
};


const SpeakNowButton = () => 
    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-lg" onClick={handleStartChatButtonClick}>
        <img src="/microphone.svg" alt="Phone" className="w-5 h-5 mr-2" />
        Speak now to schedule an appointment
    </Button>


const StopChatButton = () => 
    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-lg" onClick={handleStopChatButtonClick}>
        <Phone className="w-5 h-5 mr-2" />
        Stop chat
    </Button>


export default function Speak() {
    if (chatActive) {
        return <StopChatButton />
    }else {
        return (
            <SpeakNowButton />
        )
    }
  
}