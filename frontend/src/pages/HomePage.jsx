import { Link } from 'react-router';
import { SparklesIcon, ArrowRightIcon, ZapIcon, CheckIcon, VideoIcon, Code2Icon, UsersIcon } from 'lucide-react';
import { Show, SignInButton, SignOutButton, UserButton } from '@clerk/react';

function HomePage() {
    return (
        <div className="bg-gradient-to-br from-base-100 via-base-200 to-base-300">
            <nav className="bg-base-100/80 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50 shadow-lg">
                <div className="w-full px-6 py-4 flex items-center justify-between">

                    <Link to={"/"}
                        className='flex items-center gap-3 hover:scale-105 transition-transform duration-300'>
                        <div className='size-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-lg'>
                            <SparklesIcon className='size-6 text-white' />
                        </div>
                        <div className="flex flex-col">
                            <span className='font-black text-xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-mono tracking-wider'>
                                Career Bridge
                            </span>
                            <span className='text-xs text-base-content/60 font-medium -mt-1'>
                                Connecting Talent with Opportunity
                            </span>
                        </div>
                    </Link>

                    <SignInButton mode="modal">
                        <button className='group px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center gap-2'>
                            <span>Get Started</span>
                            <ArrowRightIcon className='size-4 group-hover:translate-x-0.5 transition-transform' />
                        </button>
                    </SignInButton>

                </div>
            </nav>

            <div className="w-full px-4 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 mx-auto flex flex-col items-center lg:items-start lg:ml-20">
                        <div className="badge badge-primary bagde-lg text font-semibold">
                            <ZapIcon className="size-4" />
                            Real-time Collabioration
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                            <span className='bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent'>
                                Code Together,
                            </span>
                            <br />
                            <span className="text-base-content">Learn Together</span>
                        </h1>

                        <p className="text-xl text-base-content/70 leading-relaxed max-w-xl text-center lg:text-left">
                            The ultimate platform for collaborative coding interviews and pair programming. Connect face-to-face, code in real-time, and ace your technical interviews.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <div className='badge badge-lg badge-outline'>
                                <CheckIcon className='size-4 text-success' />
                                Live Video Chat
                            </div>
                            <div className='badge badge-lg badge-outline'>
                                <CheckIcon className='size-4 text-success' />
                                Code Editor
                            </div>
                            <div className='badge badge-lg badge-outline'>
                                <CheckIcon className='size-4 text-success' />
                                Multi-Language
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <SignInButton mode="modal">
                                <button className='btn btn-primary btn-lg'>
                                    Start Coding Now
                                    <ArrowRightIcon className='size-5' />
                                </button>
                            </SignInButton>

                            <button className='btn btn-outline btn-lg'>
                                <VideoIcon className='size-5' />
                                Watch Demo
                            </button>
                        </div>

                        <div className="stats stats-horizontal bg-base-100 shadow-lg">
                            <div className="stat">
                                <div className="stat-value text-primary">10K+</div>
                                <div className='stat-title'>Active Users</div>
                            </div>
                            <div className="stat">
                                <div className="stat-value text-secondary">50K+</div>
                                <div className='stat-title'>Sessions</div>
                            </div>
                            <div className="stat">
                                <div className="stat-value text-accent">99.9%</div>
                                <div className='stat-title'>Uptime</div>
                            </div>
                        </div>

                    </div>

                    <img src="/hero.png" alt=" CodeCollab Platform" className='w-full max-h-[850px] rounded-3xl shadow-2xl border-4 border-base-100 hover:scale-105 transition-transform duration-500' />

                </div>
            </div>

            <div className="w-full py-20 bg-base-200/50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
                            Everything You Need to{" "}
                            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-mono">
                                Succeed
                            </span>
                        </h2>
                        <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                            Powerful features designed to make your coding interviews seamless and productive
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="card bg-base-100/80 backdrop-blur-sm border border-base-content/10 shadow-xl hover:shadow-2xl hover:border-primary/40 hover:-translate-y-2 transition-all duration-300">
                            <div className="card-body p-8 items-center text-center">
                                <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-2 shadow-inner">
                                    <VideoIcon className='size-8 text-primary' />
                                </div>
                                <h3 className="card-title text-xl font-bold mt-2">HD Video Call</h3>
                                <p className="text-base-content/70 leading-relaxed text-sm">
                                    Crystal clear video and audio for seamless communication during interviews
                                </p>
                            </div>
                        </div>

                        <div className="card bg-base-100/80 backdrop-blur-sm border border-base-content/10 shadow-xl hover:shadow-2xl hover:border-secondary/40 hover:-translate-y-2 transition-all duration-300">
                            <div className="card-body p-8 items-center text-center">
                                <div className="size-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-2 shadow-inner">
                                    <Code2Icon className='size-8 text-secondary' />
                                </div>
                                <h3 className="card-title text-xl font-bold mt-2">Live Code Editor</h3>
                                <p className="text-base-content/70 leading-relaxed text-sm">
                                    Collaborate in real-time syntax highlighting and multiple language support
                                </p>
                            </div>
                        </div>

                        <div className="card bg-base-100/80 backdrop-blur-sm border border-base-content/10 shadow-xl hover:shadow-2xl hover:border-accent/40 hover:-translate-y-2 transition-all duration-300">
                            <div className="card-body p-8 items-center text-center">
                                <div className="size-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-2 shadow-inner">
                                    <UsersIcon className='size-8 text-accent' />
                                </div>
                                <h3 className="card-title text-xl font-bold mt-2">Easy Collaboration</h3>
                                <p className="text-base-content/70 leading-relaxed text-sm">
                                    Share your screen, discuss solutions, and learn from each other in real-time
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomePage;