import React, {useState, useEffect} from 'react';
import Header from '../Header';
import { EditForm } from '../Edit/EditForm';
import { ModalContainer } from '../Modals/ModalContainer';
import { ModalSave } from '../Modals/ModalSave';
import { Formik } from 'formik';

const Edit = (props) => {
    const { onBack, onSubmit, saving } = props;
    const [modal, setModal] = useState(false);

    let openModal = () => {
        setModal(true);
    }

    let closeModal = () => {
        setModal(false);
    }

    return (
        <div className="edit">
            <ModalContainer
                showing={modal}
                setShowing={setModal}
                closable={false}
                render={ () => (
                    <ModalSave
                        title="Are you sure you want to stop editing?"
                        message="Your deck will not be saved."
                        cancelLabel="Cancel"
                        onCancel={closeModal}
                        continueLabel="Continue"
                        onContinue={onBack}
                    />
                )}
            />
            <Formik
                initialValues={{
                    name: "",
                    description:  "",
                    cards:  [],
                    categories: []
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    onSubmit(values);
                }}
                render={({submitForm, isSubmitting, values}) => (
                    <div>
                        <Header onBack={openModal} otherButtonText={!isSubmitting ? "Create" : "Saving..."} title={"Create a new deck"} subtitle={"Click create to add the deck"} onSubmit={submitForm} isSubmitting={isSubmitting}/>
                        <EditForm values={values}/>
                    </div>
                )}
            />            
        </div>
    );
}

export default Edit;