const ErrorStrip = ({ error }) => (
    <div className="p-2 bg-red-500 text-white rounded mt-2">
      {error?.response?.data || "An error occurred"}
    </div>
  );
  
  export default ErrorStrip;
  