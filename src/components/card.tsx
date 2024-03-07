interface CardProps {
  title?: string;
  onDelete?: () => void;
  onComplete?: () => void;
  isComplete?: boolean;
}

export const Card = ({
  title,
  onDelete,
  onComplete,
  isComplete,
}: CardProps) => {
  return (
    <div className="w-96   bg-gray-600 p-4 mb-4 rounded-lg">
      <div className="flex justify-between ">
        <p className="text-white">
          {title} - {isComplete ? "Complete" : "Not Complete"}
        </p>
        {isComplete ? (
          <div className={"w-4 h-2 mt-2  rounded-lg  bg-green-600"}></div>
        ) : (
          <div className={"w-4 h-2 mt-2  rounded-lg  bg-red-600"}></div>
        )}
      </div>

      <div className="flex space-x-3 mt-8">
        <button onClick={onComplete} className="bg-green-500 rounded-lg p-2 ">
          Complete Task
        </button>
        <button onClick={onDelete} className="bg-red-500 rounded-lg p-2">
          Delete Task
        </button>
      </div>
    </div>
  );
};
