import { useState } from "react";
import { Container, VStack, Input, Button, Text, Box } from "@chakra-ui/react";

const solveBiquadratic = (a, b, c) => {
  const results = [];
  const discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
    const sqrtDiscriminant = Math.sqrt(discriminant);
    const root1 = (-b + sqrtDiscriminant) / (2 * a);
    const root2 = (-b - sqrtDiscriminant) / (2 * a);

    if (root1 >= 0) {
      results.push(Math.sqrt(root1), -Math.sqrt(root1));
    }
    if (root2 >= 0) {
      results.push(Math.sqrt(root2), -Math.sqrt(root2));
    }
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    if (root >= 0) {
      results.push(Math.sqrt(root), -Math.sqrt(root));
    }
  }

  return results;
};

const Index = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [solutions, setSolutions] = useState([]);

  const handleSolve = () => {
    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    const cNum = parseFloat(c);

    if (!isNaN(aNum) && !isNaN(bNum) && !isNaN(cNum)) {
      const results = solveBiquadratic(aNum, bNum, cNum);
      setSolutions(results);
    } else {
      setSolutions([]);
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Biquadratic Equation Solver</Text>
        <Input placeholder="Enter coefficient a" value={a} onChange={(e) => setA(e.target.value)} />
        <Input placeholder="Enter coefficient b" value={b} onChange={(e) => setB(e.target.value)} />
        <Input placeholder="Enter coefficient c" value={c} onChange={(e) => setC(e.target.value)} />
        <Button onClick={handleSolve}>Solve</Button>
        <Box>{solutions.length > 0 ? <Text>Solutions: {solutions.join(", ")}</Text> : <Text>No real solutions</Text>}</Box>
      </VStack>
    </Container>
  );
};

export default Index;
