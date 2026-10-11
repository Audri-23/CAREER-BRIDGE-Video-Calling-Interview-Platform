import { useEffect, useState } from 'react'
import { useAsyncError, useNavigate, useParams } from 'react-router'
import { PROBLEMS } from '../data/problems';
import Navbar from '../components/Navbar';
import { Panel, Group, Separator } from "react-resizable-panels"
import ProblemDescription from '../components/ProblemDescription';
import CodeEditorPanel from '../components/CodeEditorPanel';
import OutputPanel from '../components/OutputPanel';

function ProblemPage() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [currentProblemId, setCurrentProblemId] = useState("two-sum")
    const [selectedLanguage, setSelectedLanguage] = useState("javascript")
    const [code, setCode] = useState(PROBLEMS[currentProblemId].starterCode.javascript)
    const [output, setOutput] = useState(null)
    const [isRunning, setIsRunning] = useState(false)

    const currentProblem = PROBLEMS[currentProblemId]

    useEffect(() => {
        if (id && PROBLEMS[id]) {
            setCurrentProblemId(id)
            setCode(PROBLEMS[id].starterCode[selectedLanguage])
            setOutput(null)
        }
    }, [id, selectedLanguage])


    const handleLanguageChange = () => {
        //
    }


    const handleProblemChange = (newProblemId) => navigate(`/problem/${newProblemId}`);


    const triggerConfetti = () => {
        //
    }


    const checkIfTestsPassed = () => {
        //
    }


    const handleRunCode = () => {
        //
    }

    return (
        <div className='h-screen bg-base-100 flex flex-col'>
            <Navbar />

            <div className="flex-1">
                <Group orientation="horizontal">
                    <Panel defaultSize={40} minSize={30}>
                        <ProblemDescription
                            problem={currentProblem}
                            currentProblemId={currentProblemId}
                            onProblemChnage={handleProblemChange}
                            allProblems={Object.values(PROBLEMS)}
                        />
                    </Panel>

                    <Separator className='w-2 bg-base-300 hover:bg-primary transition-colors cursor-col-resize' />

                    <Panel defaultSize={60} minSize={30}>
                        <Group orientation="vertical">
                            <Panel defaultSize={70} minSize={30}>
                                <CodeEditorPanel />
                            </Panel>

                            <Separator className='h-2 bg-base-300 hover:bg-primary transition-colors cursor-row-resize' />

                            <Panel defaultSize={30} minSize={30}>
                                <OutputPanel />
                            </Panel>
                        </Group>
                    </Panel>
                </Group>
            </div>
        </div>
    )
}

export default ProblemPage