import '../../styles/dfly/MegaMenu.css'
import { X, CircleChevronRight } from 'lucide-react';

export default function MegaMenu() {
    return (
        <div className="menufull">
            <div className='closeMenu'>
                <X size={40} fontWeight={40} className='X'></X>
                <p>Close</p>
                <a href="/"><img src="./HOME_iron.svg" alt="" className='homefull' /></a>
            </div>

            <div className='menuContents'>
                <div className='menulists'>
                    <div className='menulists-in'>
                        <li>
                            <a href="">Products</a>
                            <CircleChevronRight size={30} strokeWidth={1.5} className='arrow' />
                        </li>
                        <li>
                            <a href="">Model</a>
                            <CircleChevronRight size={30} strokeWidth={1.5} className='arrow' />
                        </li>
                        <li>
                            <a href="">Android</a>
                            <CircleChevronRight size={30} strokeWidth={1.5} className='arrow' />
                        </li>
                        <li>
                            <a href="">Podas</a>
                            <CircleChevronRight size={30} strokeWidth={1.5} className='arrow' />
                        </li>
                        <li>
                            <a href="">Utilities</a>
                            <CircleChevronRight size={30} strokeWidth={1.5} className='arrow' />
                        </li>
                        <li>
                            <a href="">Industrial</a>
                            <CircleChevronRight size={30} strokeWidth={1.5} className='arrow' />
                        </li>
                        <li>
                            <a href="">Defense</a>
                            <CircleChevronRight size={30} strokeWidth={1.5} className='arrow' />
                        </li>
                        <li><a href="">Research</a></li>
                        <li><a href="">Insider</a></li>
                        <li>
                            <a href="">Support</a>
                            <CircleChevronRight size={30} strokeWidth={1.5} className='arrow' />
                        </li>
                    </div>

                    {/* <CircleChevronRight size={60} strokeWidth={40} /> */}
                </div>

            <div className='menuPage'>
                <li><a href="">Book a Model</a></li>
                <li><a href="">Request a Trail</a></li>
                <li><a href="">Find Distrbutor Center</a></li>
                <li><a href="">Book an Appointment</a></li>
                <li><a href="">Download Update</a></li>
            </div>



            </div>

        </div>
    );
}