
import { Box } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { ChatIcon} from '@chakra-ui/icons'

function Task(props) {

    const toast = useToast()

    return (
        <Box w='30%' m={5}>
          
            <Button w='100%'
                onClick={() =>
                    toast({
                        title: 'Tarefa realizada',
                        description: "Parabéns, você tá indo bem.",
                        status: 'success',
                        duration: 3000,
                        isClosable: true,
                    })
                }
            >
                {props.tarefa}
            </Button>
        </Box>)
}
export default Task