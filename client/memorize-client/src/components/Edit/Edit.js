import React, {useState, useEffect} from 'react';
import Header from '../Header';
import { EditForm } from './EditForm';
import { ModalContainer } from '../Modals/ModalContainer';
import { ModalSave } from '../Modals/ModalSave';

const Edit = (props) => {
    const { data, setData, onBack, onSubmit, saving } = props;
    const [modal, setModal] = useState(false);

    let openModal = () => {
        setModal(true);
    }

    let closeModal = () => {
        setModal(false);
    }

    return (
        <div className="edit">
            <Header onBack={openModal} otherButtonText={!saving ? "Done" : "Saving..."} otherButtonFormId={"edit-form"} title={"Edit your deck"} subtitle={"Click done to save your work"} onSubmit={onSubmit}/>
            <ModalContainer
                showing={modal}
                setShowing={setModal}
                closable={false}
                render={ () => (
                    <ModalSave
                        title="Are you sure you want to stop editing?"
                        message="Your edits will not be saved."
                        cancelLabel="Cancel"
                        onCancel={closeModal}
                        continueLabel="Continue"
                        onContinue={onBack}
                    />
                )}
            />
            <EditForm onSubmit={onSubmit} data={data} setData={setData}/>
        </div>
    );
}

export default Edit;