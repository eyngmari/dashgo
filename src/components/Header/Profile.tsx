import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

interface ProfileProps {
    showProfileData?: boolean; 
}

export function Profile({showProfileData= true}: ProfileProps) {
    return(
        <Flex align="center">
            { showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Mariana Eyng</Text>
                    <Text
                        color="gray.300"
                        fontSize="small"
                    >
                        mariana.eyng@gmail.com
                    </Text>
                </Box>
            )}
            <Avatar size="md" name="Mariana Eyng" src="https://github.com/eyngmari.png" />
        </Flex>       
    )
}