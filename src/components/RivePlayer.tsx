import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

interface RivePlayerProps {
  src: string;
  stateMachine?: string;
  artboard?: string;
}

export default function RivePlayer({
  src,
  stateMachine = "State Machine 1",
  artboard,
}: RivePlayerProps) {
  const { RiveComponent } = useRive({
    src,
    stateMachines: stateMachine,
    artboard,
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <RiveComponent />
    </div>
  );
}
