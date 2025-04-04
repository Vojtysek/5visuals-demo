import { lorenzSystem, flowField, doublePendelum } from "../node_modules/5visuals/src";
import { Visual } from "./components/ui/Visual";
import "./index.css";

export function App() {
  return (
    <div className="flex flex-col items-center gap-12 my-12 justify-center">
      <Visual
        func={lorenzSystem}
        config={{
          height: 500,
        }}
      />
      <Visual
        func={flowField}
        config={{
          height: 200,
          particleCount: 1000,
        }}
      />
      <Visual func={doublePendelum} />
    </div>
  );
}
