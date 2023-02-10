import { Input } from "./Input";
import { Text } from "./Text";

function App() {
  return (
    <div>
      <Text
        type="h1"
        color="#ffffff"
        border="1px solid black"
        lineHeight="1.2rem"
        backgroundColor="black"
        padding="5px"
      >
        Isaiah
      </Text>
      <Text type="p" fontSize="10px">
        Jason
      </Text>
      <Text color="purple" backgroundColor="brown">
        Merit
      </Text>
      <Input />
    </div>
  );
}

export default App;
