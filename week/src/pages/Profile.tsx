import {
  Box,
  Container,
  Heading,
  Text,
  Card,
  Flex,
  Avatar,
  Badge,
  Separator,
} from "@radix-ui/themes";

function Profile() {
  const favoriteArtists = [
    {
      name: "Fourth Nattawat",
      image: "https://i.pinimg.com/1200x/80/db/b7/80dbb7f04b685b4806d55a958042cef5.jpg",
    },
    {
      name: "Lookkhunnoo ",
      image: "https://i.pinimg.com/736x/af/15/4c/af154cbce7354c505bcb92bf70d47e88.jpg",
    },
    {
      name: "Winny",
      image: "https://i.pinimg.com/736x/e6/c8/fd/e6c8fd25c36e0acfe791167a9c4903fd.jpg",
    },
  ];

  return (
    <Box className="min-h-screen bg-gradient-to-b from-pink-50 via-rose-50 to-white flex items-center justify-center py-10 text-gray-800">
      <Container size="3">
        <Card className="p-8 rounded-3xl bg-white border border-pink-200 shadow-[0_4px_30px_rgba(255,182,193,0.2)]">

          
          <Flex direction="column" align="center" gap="6">
            <Avatar
              size="9"
              radius="full"
              fallback="YP"
              src="https://i.pinimg.com/1200x/3e/0b/a3/3e0ba36c326a52469f9d2395c4a958c5.jpg"
              className="shadow-[0_0_20px_rgba(255,182,193,0.4)]"
              color="pink"
            />
            <Box className="text-center">
              <Heading
                size="8"
                className="font-serif bg-gradient-to-r from-pink-500 via-rose-400 to-pink-600 bg-clip-text text-transparent"
              >
                ยุพารัตน์ ปลั่งกลาง
              </Heading>
              <Text size="3" color="gray">
                การไปติ่งเมนที่ชอบคือชีวิตประจำวัน
              </Text>
            </Box>
          </Flex>

          <Separator my="5" size="4" className="bg-pink-200/50 h-[1px] border-none" />

         
          <Box mb="6">
            <Heading size="5" mb="3" className="text-pink-500 font-semibold">
              เกี่ยวกับฉัน
            </Heading>
            <Text size="3" color="gray">
              สวัสดีค่ะ ฉันยุพารัตน์ ปลั่งกลาง เป็นนักติ่ง โฟ้ดๆ gmmtv เวลาว่างชอบไปติ่งไปตามดารา
              งานเยอะแค่ไหนก็ขอไปหา โฟ้ดๆ ก่อน ไปเติมพอมีกำลังใจ และชอบไปคอนด้วยค่ะ แบบปีนึงไป 1-3 คอน
              คือชอบ ถึงแม้เงินจะไม่มีแต่ยอมอดได้ค่ะในการไปคอน มีหลานด้วยนะคะชื่อลูกคุณหนู
            </Text>
          </Box>

          <Separator my="5" size="4" className="bg-pink-200/50 h-[1px] border-none" />

         
          <Box mb="6">
            <Heading size="5" mb="3" className="text-pink-500 font-semibold">
              การศึกษา
            </Heading>
            <Card className="p-4 bg-pink-50 border border-pink-200 rounded-xl shadow-inner">
              <Flex direction="column" gap="2">
                <Heading size="4" className="text-pink-600">
                  ปริญญาตรี วิศวกรรมศาสตรบัณฑิต
                </Heading>
                <Text color="gray">สาขาวิชา: วิศวกรรมคอมพิวเตอร์</Text>
                <Text color="gray">สถาบัน: มหาวิทยาลัยธุรกิจบัณฑิตย์</Text>
                <Text size="2" color="gray">
                  2566 - ปัจจุบัน
                </Text>
              </Flex>
            </Card>
          </Box>

          <Separator my="5" size="4" className="bg-pink-200/50 h-[1px] border-none" />

          {/* Skills */}
          <Box mb="6">
            <Heading size="5" mb="3" className="text-pink-500 font-semibold">
              ทักษะและความสามารถ
            </Heading>
            <Flex gap="3" wrap="wrap" justify="center">
              {[
                "เป็นติ่ง",
                "ชอบไปติ่ง",
                "ชอบไปคอน",
                "ชอบไปตามดารา"
              ].map((skill) => (
                <Badge
                  key={skill}
                  size="3"
                  className="bg-gradient-to-r from-pink-400 to-rose-300 text-white font-semibold shadow-sm hover:shadow-[0_0_10px_rgba(255,182,193,0.5)] transition-all duration-300"
                >
                  {skill}
                </Badge>
              ))}
            </Flex>
          </Box>

          <Separator my="5" size="4" className="bg-pink-200/50 h-[1px] border-none" />


          <Box mb="6">
            <Heading size="5" mb="3" className="text-pink-500 font-semibold">
              ศิลปินที่ชอบ และหลาน
            </Heading>
            <Flex gap="6" wrap="wrap" justify="center">
              {favoriteArtists.map((artist) => (
                <Box key={artist.name} className="flex flex-col items-center gap-2">
                  <Avatar
                    size="7"
                    src={artist.image}
                    fallback={artist.name[0]}
                    radius="full"
                    className="shadow-[0_0_15px_rgba(255,182,193,0.3)]"
                  />
                  <Text size="2" className="text-pink-600 font-medium text-center">
                    {artist.name}
                  </Text>
                </Box>
              ))}
            </Flex>
          </Box>

          <Separator my="5" size="4" className="bg-pink-200/50 h-[1px] border-none" />


          <Box className="text-center">
            <Heading size="5" mb="3" className="text-pink-500 font-semibold">
              ช่องทางการติดต่อ
            </Heading>
            <Text size="3" color="gray">
              📧 <span className="text-pink-600 font-medium">yuparat@email.com</span>
            </Text>
            <Text size="3" color="gray">
              💼 <span className="text-pink-600 font-medium">github.com/yuparatp</span>
            </Text>
            <Text size="3" color="gray">
              🌐 <span className="text-pink-600 font-medium">yuparat-portfolio.com</span>
            </Text>
          </Box>

        </Card>
      </Container>
    </Box>
  );
}

export default Profile;
