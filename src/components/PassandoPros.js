import { Input } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { useState } from 'react'
import Task from './Task'
import { Heading } from '@chakra-ui/react'


//Componente recebendo valor do elemento pai (props)
//observem: props.valor (mesmo nome do valor enviado pelo elemento pai)
function PassandoProps(props) {

    const [task, setTask] = useState("");
    const [arrayTask, setArrayTask] = useState([])

    const createTask = () => {
        const newTask = {
            tarefa: task
        } 
        const arrayToSpread = [...arrayTask, newTask]
        setArrayTask(arrayToSpread)            
    }

    const handleTask = (event) => {
        setTask(event.target.value)
    }

    const taskMapeado = arrayTask.map((task, index) => {
        return (
            <Task key={index} tarefa={task.tarefa} ></Task>
        )

    })

    return (<div id="divProps">
      <Heading m={5} >Lista de tarefas</Heading>
        <Box w='30%' m={5}   >
            <Input placeholder='Qual sua próxima tarefa?' onChange={handleTask} />
                <Button colorScheme='teal' size='sm' mt='2' w='100%'
                onClick={createTask}>
                Enviar
            </Button>
        </Box>
        {taskMapeado}
    </div>
    )
}
export default PassandoProps