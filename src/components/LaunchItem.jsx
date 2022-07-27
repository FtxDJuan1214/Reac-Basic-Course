import {Box} from '@chakra-ui/react'

export function LaunchItem (launch) {
    return (
        <Box key={launch.flight_number} bg="gray.100" p={4} m={4} borderRadius={7}>
            {launch.mission_name} ({launch.launch_year})
        </Box>
    )
}