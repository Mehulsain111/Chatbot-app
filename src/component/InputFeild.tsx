
import type { FormEvent } from "react";

interface Props {
  handleSubmit: (e: FormEvent) => void;
  input: string;
  setInput: (value: string) => void;
}

export const InputField = ({ handleSubmit, input, setInput }: Props) => {
  return (
    <div>
      <div className="animate__animated animate__bounceInDown">
        <div className="chatbox my-auto">
          <form
            className="w-100 d-flex justify-content-around"
            onSubmit={handleSubmit}
          >
            <input
              className="inputfield w-100"
              type="text"
              placeholder="Ask anything"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="px-1" type="submit" aria-label="Send message">
              <i className="fa-solid fa-arrow-up"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
