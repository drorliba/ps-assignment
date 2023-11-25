import { useEffect, useState } from 'react';
import IconPlay from '@/assets/IconPlay.jsx';
import Modal from 'react-bootstrap/Modal';
import media from '@/assets/media.js';
import './TrailerModal.css';

const TrailerModal = ({ episodeId }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleShow = () => {
        setIsOpen(true);
    }
    const handleClose = () => setIsOpen(false);

    // useEffect(() => {
    //     console.log(episodeId);
    //     console.log(media[episodeId]);
    // }, [])

    return (<>
        {
            media[episodeId].trailer &&
            <>
                <div className="play-trailer-button" onClick={handleShow}><IconPlay />Play trailer</div>

                <Modal show={isOpen} onHide={handleClose} centered size="lg">
                    <Modal.Header closeButton />
                    <Modal.Body>
                        <iframe className="video-player" src={media[episodeId].trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </Modal.Body>
                </Modal>
            </>
        }
    </>);
};

export default TrailerModal;