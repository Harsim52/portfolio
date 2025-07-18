import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "vscode",
    "git",
    "html5",
    "javascript",
    "microsoft",
    "react",
    "tailwindcss",
    "vscode",
    "git",
    "html5",
    "tailwindcss",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center ">
      <OrbitingCircles iconSize={30}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`${import.meta.env.BASE_URL}logos/${skill}.svg`}
/>
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`${import.meta.env.BASE_URL}logos/${skill}.svg`}
 />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => {
  return <img src={src} className="duration-200 rounded-sm hover:scale-110" />;
};
