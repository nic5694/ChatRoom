import '../App.css';
import NavBar from '../components/NavBar';
import {useState, useEffect} from 'react'
import axios from 'axios';

function ChatPage(props) {

    const [arrayOfUsers, setArrayOfUsers] = useState([]);
    const [arrayOfMessages, setArrayOfMessages] = useState([]);

    const loadAllMessages = async (callback) => {
        try {
            const res = axios.get("http://127.0.0.1:8000/api/v1/messages")
            setArrayOfMessages((await res).data);
        } catch (err) {
            console.log(err);
        } finally {
            if (callback === undefined) {
                await new Promise(resolve => setTimeout(resolve, 3000));
                await loadAllMessages();
            }
        }
    }

        const loadAllUsers = async () => {
            try {
                const res = axios.get("http://127.0.0.1:8000/api/v1/users")
              //  fetchedUsers = res.data;
                setArrayOfUsers((await res).data);
            } catch (err) {
                console.log(err);
            } finally {
                await new Promise(resolve => setTimeout(resolve, 3000));
                await loadAllUsers();
            }
        }
        const sendMessage = (data) => {
            axios.post("http://127.0.0.1:8000/api/v1/messages", data)
                .then(res => {
                    //todo check status code
                    loadAllMessages(false);
                }).catch(err => {
                //TODO mention an error to the user
                console.log(err);
            });
        }

        const onSubmit = (event) => {
            event.preventDefault();

            let data = {
                message: event.target.message.value,
                sender_id: props.user.id,
                sender_username: props.user.username,
                chat_image: null
                //TODO add image support
            }
            event.target.message.value = "";
            sendMessage(data);
        }

        useEffect(() => {
            loadAllMessages();
            loadAllUsers();
        }, []);

        const logOut = () => {

            const currentDate = new Date();
            const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')} ${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}:${currentDate.getSeconds().toString().padStart(2, '0')}`;

            axios.put("http://127.0.0.1:8000/api/v1/users/" + props.user.id,
                {
                    name: props.user.name,
                    email: props.user.email,
                    username: props.user.username,
                    password: props.user.password,
                    active: 0,
                    profile_picture: null,
                    updated_at: formattedDate
                }
            )
                .then(response => {
                    // use response to set user
                    props.setUser({});
                    props.setRegisterPage(0);
                })
                .catch(error => {
                    console.error(error);
                });
        }

        return (
            <div>
                {/* Whole Container */}
                <div class="flex h-screen">

                    {/* The Users Container */}
                    <div class="bg-white w-1/2 border-[0.5px] border-t-0 border-l-0 border-gray-300"><NavBar
                        LogOut={props.logOutUser}></NavBar>
                        {/* Current User Logged In Containers*/}
                        <div class="flex justify-center py-8">
                            <div>
                                {generateUserSVG()}
                            </div>
                            <div class="py-11 px-5 text-lg text-[#171717]">
                                {props.user == null ? " " : props.user.name}
                            </div>
                            <div class="py-11">|</div>
                            <div class="w-3 h-3 bg-[#58E166] rounded-xl my-[52px] ml-3"></div>
                            <div class="py-[46px] pl-2">Online</div>

                        </div>

                        {/* User Banner */}
                        <div
                            class="text-center bg-[#171717] text-white py-3 text-sm font-bold drop-shadow-lg border-t-[1px]">
                            Users
                        </div>

                        {/* List Of User Container */}
                        <div class="mx-2 my-2 h-[50%] overflow-auto">

                            {arrayOfUsers.map((user) => (
                                <div>{props.user.id === user.id ?
                                    <div></div> : generateUser(user.username, user.email, user.active)}</div>
                            ))}

                        </div>
                    </div>

                    {/* The Chat Container */}
                    <div class="bg-white w-1/2 flex flex-col">

                        {/* Chat Banner */}
                        <div class="text-center bg-[#171717] text-white py-[17.5px] text-sm font-bold drop-shadow-lg">
                            Chat Room
                        </div>

                        {/* Actual Chat */}
                        <div class="p-10 h-full overflow-auto" id="chatContainer">


                            {arrayOfMessages.map((msg) => (
                                <div>{msg.sender_id === props.user.id ? genrateGreenBubble(msg.message, msg.sender_username) : genrateGrayBubble(msg.message, msg.sender_username)}</div>
                            ))}

                        </div>

                        {/* Send Message Bar */}
                        <form onSubmit={onSubmit}>
                            <div class="bg-white py-5 border-[1px] border-t-gray-300 border-b-0 flex justify-around">

                                <input class="bg-white border-[1px] border-gray-500 rounded-sm w-[75%] pl-2"
                                       placeholder='Enter Message Here' type="text" id="message"/>
                                <button type="submit"
                                        class="bg-[#171717] text-white w-24 h-10 rounded-md text-sm font-semibold">Send
                                </button>

                            </div>
                        </form>

                    </div>

                </div>

            </div>
        );
    }

    function genrateGreenBubble(message, username) {
        return (
            <div>
                <div class="flex justify-end py-1 ">
                    <div class="text-white bg-[#58E166] px-5 py-4 rounded-2xl max-w-[50%] text-xs ">
                        {message}
                    </div>
                </div>
                <div class="mr-2 text-right text-[10px] opacity-30">
                    {username}
                </div>
            </div>

        );
    }

    function genrateGrayBubble(message, username) {
        return (
            <div>
                <div class="flex py-1 ">
                    <div class="text-gray-800 bg-[lightgray] px-5 py-4 rounded-2xl max-w-[50%] text-xs ">
                        {message}
                    </div>
                </div>
                <div class="ml-2 text-[10px] opacity-30">
                    {username}
                </div>
            </div>
        );
    }

    function generateUserSVG() {
        return (
            <svg width="120" height="120" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_21_5)">
                    <circle cx="49" cy="45" r="45" fill="white"/>
                    <circle cx="49" cy="45" r="44.5" stroke="black" stroke-opacity="0.25"/>
                </g>
                <circle cx="49" cy="33" r="15" fill="#C1C1C1"/>
                <path d="M27 71C27 59.9543 35.9543 51 47 51H50C61.0457 51 70 59.9543 70 71V74H27V71Z" fill="#C1C1C1"/>
                <defs>
                    <filter id="filter0_d_21_5" x="0" y="0" width="98" height="98" filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_21_5"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_21_5" result="shape"/>
                    </filter>
                </defs>
            </svg>
        );
    }

    function generateUserSVG2() {
        return (
            <svg width="40" height="50" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_21_5)">
                    <circle cx="49" cy="45" r="45" fill="white"/>
                    <circle cx="49" cy="45" r="44.5" stroke="black" stroke-opacity="0.25"/>
                </g>
                <circle cx="49" cy="33" r="15" fill="#C1C1C1"/>
                <path d="M27 71C27 59.9543 35.9543 51 47 51H50C61.0457 51 70 59.9543 70 71V74H27V71Z" fill="#C1C1C1"/>
                <defs>
                    <filter id="filter0_d_21_5" x="0" y="0" width="98" height="98" filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_21_5"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_21_5" result="shape"/>
                    </filter>
                </defs>
            </svg>
        );
    }

    function generateUser(username, email, isOnline) {

        return (
            <div class="bg-white border-[1px] flex py-1 px-6 justify-between "
                 style={isOnline ? {opacity: "100%"} : {opacity: "40%"}}>

                <div class="flex gap-3">
                    <div>{generateUserSVG2()}</div>

                    <div class="text-[12px] mt-1">
                        <div>{username}</div>
                        <div>{email}</div>
                    </div>
                </div>

                {
                    isOnline === 1 ?
                        <div class="flex mt-4">
                            <div class="w-2 h-2 mt-[4px] mx-2 bg-[#58E166] rounded-xl"></div>
                            <div class="text-[12px]">Online</div>
                        </div>


                        :

                        <div class="flex mt-4">
                            <div class="w-2 h-2 mt-[4px] mx-2 bg-[lightgray] rounded-xl"></div>
                            <div class="text-[12px]">Offline</div>
                        </div>

                }

            </div>
        );
    }
    export default ChatPage;