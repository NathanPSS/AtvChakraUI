import {
  Card,
  CardBody,
  Text,
  Stat,
  StatNumber,
  StatHelpText,
  StatArrow,
  Stack,
  Heading,
  Box,
  SimpleGrid,
  Grid,
} from "@chakra-ui/react";

interface IProps {
  title: string;
  description: string;
  value: string;
  statValue?: string;
  type: "increase" | "decrease";
}

export default function FinancialCard(props: IProps) {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      backgroundColor={'blackAlpha.100'}
      boxShadow='xl'
    >
      <Stack>
        <CardBody>
          <Heading size="md">{props.title}</Heading>
          <Text py="2">{props.description}</Text>
          <Stat>
            <Box display="flex" flexDirection="row">
              <StatHelpText>
                {props.statValue ? (
                    <Box marginTop={2} display='flex' flexDirection='row' gap={1}>
                   <StatArrow type={props.type} />
                   <Text>{props.statValue}</Text>
                   </Box>
                ) : (
                    <StatArrow type={props.type} />
                )}
        
              </StatHelpText>
              <Box width={150}></Box>
              <StatNumber>
                <Text color="goldenrod">{props.value}</Text>
              </StatNumber>
            </Box>
          </Stat>
        </CardBody>
      </Stack>
    </Card>
  );
}
