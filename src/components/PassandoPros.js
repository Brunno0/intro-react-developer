import { Input, Box, Button, Heading} from '@chakra-ui/react'
import { useState } from 'react'
import Task from './Task'
//Componente recebendo valor do elemento pai (props)
//observem: props.valor (mesmo nome do valor enviado pelo elemento pai)
function PassandoProps() {
    const [task, setTask] = useState("");
    const [arrayTask, setArrayTask] = useState([])

    const createTask = () => {
    const idTask = Date.now();

        const newTask = {
            tarefa: task,
            idTask
        } 
        const arrayToSpread = [...arrayTask, newTask]
        setArrayTask(arrayToSpread)
        setTask("")
        
    }
    const handleTask = (event) => {
        setTask(event.target.value)
      }

      function deleteTask (id){
         const filterToDelete = arrayTask.filter((task)=>{
            if(id!== task.idTask){
                return (task)
            }      
     })
     setArrayTask(filterToDelete)
     }
     
    const taskMapeado = arrayTask.map((task) => {
        return (
            <Task key={task.idTask} tarefa={task} deleteTask={deleteTask}></Task>
        )
    })
    return (<div id="divProps">
      <Heading m={5} >Lista de tarefas</Heading>
        <Box w='30%' m={5}   >
            <Input placeholder='Qual sua próxima tarefa?' onChange={handleTask} value={task} />
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