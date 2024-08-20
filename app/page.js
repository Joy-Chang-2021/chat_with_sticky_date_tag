'use client';
import {
  Box,
  Center,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Textarea,
  Heading,
} from '@chakra-ui/react';
import ChatContent from '@/app/_components/chat-content';

export default function Home() {
  const textareaHeight = (e) => {
    const el = e.target;
    el.style.height = '40px';
    el.style.height = `${el.scrollHeight + 5}px`;
  };

  return (
    <Center
      h="100vh"
      bgGradient="linear(to-br,#bee3f8, #CBD5E0)"
    >
      <Card
        w="800px"
        h="600px"
        pos="relative"
        borderRadius="15px"
        overflow="hidden"
      >
        <CardHeader bgColor="#748B83">
          <Heading
            as="h1"
            size="lg"
            color="#E9E941"
            letterSpacing="3px"
          >
            CHAT ROOM
          </Heading>
        </CardHeader>

        <ChatContent />

        <CardFooter bgColor="#748B83">
          <Textarea
            resize="none"
            bgColor="#d6e0c980"
            _focus={{ bgColor: '#D6E0C9' }}
            _focusVisible={{ borderWidth: '1px' }}
            css={{
              minHeight: '40px',
              height: '40px',
              maxHeight: '200px',
            }}
            onChange={textareaHeight}
          />
        </CardFooter>
      </Card>
    </Center>
  );
}
