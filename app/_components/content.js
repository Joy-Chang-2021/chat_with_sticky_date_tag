import { Box, Flex, Text } from '@chakra-ui/react';
import apiData from '@/app/_utils/api-data.json';

export default function Content() {
  const { data } = apiData;
  console.log('apiData: ', apiData);
  return (
    <Box>
      {data.map(({ date, messages }, dayIndex) => (
        <Flex
          key={dayIndex}
          direction="column"
          gap="10px"
          mb="10px"
        >
          <Text
            w="fit-content"
            mx="auto"
            p="2px 10px"
            borderRadius="10px"
            bgColor="white"
          >
            {date}
          </Text>
          {messages.map((msg, msgIndex) => (
            <Flex
              key={msgIndex}
              justify={
                msg.sender === 'me'
                  ? 'flex-end'
                  : 'flex-start'
              }
            >
              <Box maxW="65%">
                {msg.sender !== 'me' && (
                  <Text color="green">{msg.sender}</Text>
                )}
                <Text
                  p="5px 15px"
                  borderRadius="15px"
                  bgColor="white"
                >
                  {msg.text}
                </Text>
                <Text
                  textAlign={
                    msg.sender === 'me' ? 'end' : 'start'
                  }
                  color="green"
                  fontSize="12px"
                >
                  {msg.time}
                </Text>
              </Box>
            </Flex>
          ))}
        </Flex>
      ))}
    </Box>
  );
}
