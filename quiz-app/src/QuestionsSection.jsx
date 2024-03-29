import SelectionsSection from "./SelectionsSection";

export default function QuestionsSection({
  currentQuestion,
  currentQuestionIndex,
  handleSelection,
  choiceStatus,
  canClick,
}) {
  return (
    <div className="flex flex-col text-center w-[550px] rounded-lg">
      <h1 className="text-xl font-bold text-cyan-800 underline mb-5">
        Question {currentQuestionIndex + 1}
      </h1>
      <h1 className="text-xl mb-5">{currentQuestion.question}</h1>

      <SelectionsSection
        choiceStatus={choiceStatus}
        choices={currentQuestion.choices}
        onHandleSelection={(e) => handleSelection(e)}
        canClick={canClick}
      />
    </div>
  );
}
