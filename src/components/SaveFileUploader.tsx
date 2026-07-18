import type { FC, ChangeEvent } from "react";
import { loadGameData } from "../scripts/game-loader";

export const SaveFileUploader: FC = () => {
  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result;
        if (typeof content === "string") {
          try {
            const parsedData = JSON.parse(content);
            console.log(parsedData);
            loadGameData(content);
          } catch (error) {
            console.error("Error parsing savefile:", error);
          }
        }
      };
      reader.readAsText(file);
    }
  };

  return <input type="file" accept=".json,.sav" onChange={handleFileUpload} />;
};
