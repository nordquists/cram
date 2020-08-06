import React, {useState, useEffect} from 'react';
import Header from '../Header';
import { EditForm } from './EditForm';
import { ModalContainer } from '../Modals/ModalContainer';
import { ModalSave } from '../Modals/ModalSave';
import { Formik } from 'formik';

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
            <Formik
                initialValues={{
                    name: data.name || "",
                    description: data.description || "",
                    cards: data.cards || [],
                    categories: data.categories || []
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
                        resetForm();
                        setSubmitting(false);
                    }, 1000)
                }}
                render={({submitForm, isSubmitting, values}) => (
                    <div>
                        <Header onBack={openModal} otherButtonText={!isSubmitting ? "Done" : "Saving..."} title={"Edit your deck"} subtitle={"Click done to save your work"} onSubmit={submitForm} isSubmitting={isSubmitting}/>
                        <EditForm values={values} data={data} setData={setData}/>
                    </div>
                )}
            />            
        </div>
    );
}

export default Edit;