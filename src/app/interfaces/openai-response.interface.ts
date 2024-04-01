export interface OpenAIResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Choice[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  system_fingerprint: string;
}

interface Choice {
  index: number;
  message: Message;
  logprobs: null | any;
  finish_reason: string;
}

interface Message {
  role: string;
  content: string;
}
