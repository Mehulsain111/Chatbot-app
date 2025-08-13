import robo from "../../public/thinkingrobo.png";
import human from "../../public/humanCout.png";

interface ChatEntry {
  query: string;
  feedback: string;
}
 
interface Props {
  chatHistory: ChatEntry[];
}

export const Chatbox = ({ chatHistory }: Props) => {
  return (
    <div className="container chat-history">
      {chatHistory
        .map((entry, index) => (
          <div
            key={index}
            className="d-flex align-items-center w-100 chat-message"
          >
            <div className="col-2 d-flex justify-content-start">
              <img className="w-75" src={human} alt="Human Avatar" />
            </div>
            <div className="col-8">
              <div className="query py-2 text-start w-100">
                <p className="pe-2">
                  <span style={{ borderRadius: "20px" }} className="px-2 py-1">
                    {entry.query}
                  </span>
                </p>
              </div>
              <div className="feedback py-2 text-end ms-0 w-100">
                <p className="pe-2">
                  <span
                    style={{ borderRadius: "20px" }}
                    className="px-2 py-1 animate__animated animate__bounceInLeft"
                  >
                    {entry.feedback}
                  </span>
                </p>
              </div>
            </div>
            <div className="col-2 d-flex justify-content-end">
              <img className="w-75 pt-4" src={robo} alt="Robot Avatar" />
            </div>
          </div>
        ))}
    </div>
  );
};
