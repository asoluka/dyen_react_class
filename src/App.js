import { Button } from "./Button";
import { Flex } from "./Flex";
import { Input } from "./Input";

function App() {
  return (
    <Flex height="100vh" justifyContent="center" alignItems="center">
      <Flex flexDirection="column" width="40%">
        <Input labelTxt="Email:" placeholder="Enter name" type="email" />
        <Input
          labelTxt="Password:"
          placeholder="Enter password"
          type="password"
        />
        <Button>Submit</Button>
      </Flex>
    </Flex>
  );
}

export default App;
