
import { Box,Button } from '@chakra-ui/react'

function Task(props) {
//Componente recebendo valor do elemento pai (props)
//observem: props.valor (mesmo nome do valor enviado pelo elemento pai)
    const { tarefa, idTask } = props.tarefa
    console.log(tarefa, idTask)
    return (
        <Box w='30%' m={5}>
            <Button w='100%' onClick={()=>props.deleteTask(idTask)}>
                {tarefa}
            </Button>
        </Box>)
}
export default Task