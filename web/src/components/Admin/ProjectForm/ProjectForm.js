import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const ProjectForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.project?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error} className="space-y-4">
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        <TextField
          name="name"
          defaultValue={props.project?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="name" className="rw-field-error" />

        <Label
          name="ownerEmail"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Owner email
        </Label>
        <TextField
          name="ownerEmail"
          defaultValue={props.project?.ownerEmail}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="ownerEmail" className="rw-field-error" />

        <Label
          name="logo"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Logo
        </Label>
        <TextField
          name="logo"
          defaultValue={props.project?.logo}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="logo" className="rw-field-error" />

        <Label
          name="shortDescription"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Short description
        </Label>
        <TextField
          name="shortDescription"
          defaultValue={props.project?.shortDescription}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="shortDescription" className="rw-field-error" />

        <Label
          name="longDescription"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Long description
        </Label>
        <TextField
          name="longDescription"
          defaultValue={props.project?.longDescription}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="longDescription" className="rw-field-error" />

        <Label
          name="coverImage"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Cover image
        </Label>
        <TextField
          name="coverImage"
          defaultValue={props.project?.coverImage}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="coverImage" className="rw-field-error" />

        <Label
          name="stripeId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Stripe id
        </Label>
        <TextField
          name="stripeId"
          defaultValue={props.project?.stripeId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="stripeId" className="rw-field-error" />

        <Label
          name="goalAmount"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Goal amount
        </Label>
        <NumberField
          name="goalAmount"
          defaultValue={props.project?.goalAmount}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="goalAmount" className="rw-field-error" />

        <Label
          name="videoLink"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Video link
        </Label>
        <TextField
          name="videoLink"
          defaultValue={props.project?.videoLink}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="videoLink" className="rw-field-error" />

        <Label
          name="websiteLink"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Website link
        </Label>
        <TextField
          name="websiteLink"
          defaultValue={props.project?.websiteLink}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="websiteLink" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ProjectForm
