import React, { FormEvent } from "react";

interface AlertResultProps {
  wpm: number;
  cpm: number;
  name: string;
  handleChange: (e: FormEvent<HTMLInputElement>) => void;
  rankUserAndCloseModal: (e: FormEvent) => void;
  ranking: boolean;
  closeModal: () => void;
}

const AlertResult: React.FC<AlertResultProps> = ({
  wpm,
  cpm,
  name,
  ranking,
  handleChange,
  rankUserAndCloseModal,
  closeModal,
}) => {
  return (
    <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
      <div
        className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
        onClick={closeModal}
      ></div>

      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50">
          <button onClick={closeModal}>
            <svg
              className="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
          </button>
          <span className="text-sm"></span>
        </div>

        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold text-indigo-600">
              You typed {wpm} words per minute and {cpm} characters per minute.
            </p>
            <div className="modal-close cursor-pointer z-50">
              <button onClick={closeModal}>
                <svg
                  className="fill-current text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                </svg>
              </button>
            </div>
          </div>

          <p>
            The average person types between 38 and 40 words per minute (WPM),
            what translates into between 190 and 200 characters per minute (CPM)
          </p>
          <form onSubmit={rankUserAndCloseModal}>
            <div>
              <h3 className="font-semibold mt-4">
                To see how you ranked against others who have taken our test,
                enter your name below.
              </h3>

              <input
                type="text"
                value={name}
                onChange={handleChange}
                className="w-full border border-1 rounded-sm focus:border-indigo-600 mt-1 p-2"
                // minLength="3"
              />
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className={`${
                  ranking ? "p-2" : "p-3"
                } px-4 bg-indigo-500 rounded-lg text-white hover:bg-indigo-400 focus:outline-none w-full`}
              >
                {ranking ? <span id="loading"></span> : "Rank me!"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AlertResult;
