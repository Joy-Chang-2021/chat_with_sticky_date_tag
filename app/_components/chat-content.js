import {
  Box,
  Flex,
  Text,
  CardBody,
} from '@chakra-ui/react';
import apiData from '@/app/_utils/api-data.json';
import {
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';

export default function ChatContent() {
  const { data } = apiData;
  const containerRef = useRef(null);
  const datesRef = useRef([]);
  const [stickyDate, setStickyDate] = useState('');

  const updateDate = useCallback(() => {
    const containerTop =
      containerRef.current.getBoundingClientRect().top;

    datesRef.current.forEach((dateEl) => {
      if (!dateEl) return;

      const el = dateEl.getBoundingClientRect();
      if (el.top <= containerTop + 25) {
        setStickyDate(dateEl.firstChild.textContent);
        dateEl.style.opacity = '0';
      } else {
        dateEl.style.opacity = '1';
      }
    });
  }, []);

  const handleScroll = useCallback(() => {
    requestAnimationFrame(updateDate);
  }, [updateDate]);

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);
    return () =>
      container.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      <Box
        position="absolute"
        zIndex={100}
        top="95px"
        left="50%"
        transform="translateX(-50%)"
      >
        <DateTag
          date={stickyDate}
          opacity="0.8"
        />
      </Box>
      <CardBody
        ref={containerRef}
        position="relative"
        bgGradient="linear(to-b, #D6E1C7, #BDE1D5)"
        overflowY="auto"
        sx={{
          // hide scroll bar (for not affect the position of the internal elements)
          scrollbarWidth: 'none',
          '-ms-overflow-style': 'none',
          '::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {data.map(({ date, messages }, dayIndex) => (
          <Flex
            key={dayIndex}
            direction="column"
            gap="10px"
            mb="10px"
          >
            <Box
              ref={(el) =>
                (datesRef.current[dayIndex] = el)
              }
              transition="opacity 100ms ease"
            >
              <DateTag date={date} />
            </Box>
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
      </CardBody>
    </>
  );
}

function DateTag({ date, ...props }) {
  return (
    <Text
      w="fit-content"
      mx="auto"
      p="2px 10px"
      borderRadius="10px"
      bgColor="white"
      {...props}
    >
      {date}
    </Text>
  );
}
