import { useNavigate } from "react-router-dom";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons/faLightbulb";
import { faLightbulb as faLightbulbSolid } from "@fortawesome/free-solid-svg-icons/faLightbulb";
import HeaderText from "./ui/HeaderText";
import Card from "./ui/Card";

const QuickAccess = () => {
  const navigate = useNavigate();

  return (
    <section>
      <HeaderText description="Some sub-projects that I work on in this codebase">
        Quick Access
      </HeaderText>

      <Card
        icon={faLightbulb}
        iconHovered={faLightbulbSolid}
        text="Power Outages"
        onClick={() => navigate("/power-outages")}
      />
    </section>
  );
};

export default QuickAccess;
