import { Box, Container, Heading, Text, Card, Flex } from "@radix-ui/themes";

function Home() {
  return (
    <Box className="min-h-screen bg-gradient-to-b from-pink-50 via-rose-50 to-white flex items-center justify-center py-10 text-gray-800">
      <Container size="3">
        <Box className="text-center mb-10">
          <Heading
            size="8"
            mb="3"
            className="font-serif bg-gradient-to-r from-pink-500 via-rose-400 to-pink-600 bg-clip-text text-transparent"
          >
            ยินดีต้อนรับ
          </Heading>
          <Text size="5" color="gray">
            เข้าสู่การเป็นติ่งเมนที่ชอบคือชีวิตประจำวัน
          </Text>
        </Box>

        <Flex direction="column" gap="6">
          <Card className="p-6 rounded-3xl bg-white border border-pink-200 shadow-[0_4px_20px_rgba(255,182,193,0.3)] hover:shadow-[0_6px_30px_rgba(255,182,193,0.4)] transition-all duration-300">
            <Heading size="6" mb="3" className="text-pink-600 font-semibold">
              เกี่ยวกับเว็บไซต์นี้
            </Heading>
            <Text size="3" color="gray">
              เว็บไซต์นี้สร้างขึ้นเพื่อแนะนำข้อมูลส่วนตัว และน้องโฟ้ดๆ
            </Text>
          </Card>
        </Flex>
      </Container>
    </Box>
  );
}

export default Home;
