import { LightningElement, api, wire } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import OPPORTUNITY_STAGE_FIELD from '@salesforce/schema/Opportunity.StageName';

export default class insertOpp extends LightningElement {
  @api recordId;
  oppName = '';
  closeDate = '';
  stageName = '';
  stageOptions = [];

  @wire(getObjectInfo, { objectApiName: OPPORTUNITY_OBJECT })
  opportunityInfo;

  @wire(getPicklistValues, {
    recordTypeId: '$opportunityInfo.data.defaultRecordTypeId',
    fieldApiName: OPPORTUNITY_STAGE_FIELD
  })
  stagePicklistValues({ data, error }) {
    if (data) {
      this.stageOptions = data.values.map(option => ({
        label: option.label,
        value: option.value
      }));
    } else if (error) {
      console.error(error);
    }
  }

  handleStageChange(event) {
    this.stageName = event.target.value;
  }

  handleCloseDateChange(event) {
    this.closeDate = event.target.value;
  }

  handleNameChange(event) {
    this.oppName = event.target.value;
  }

  handleSave() {
    const fields = {};
    fields.Name = this.oppName;
    fields.CloseDate = this.closeDate;
    fields.StageName = this.stageName;
    const recordInput = { apiName: OPPORTUNITY_OBJECT.objectApiName, fields };
    createRecord(recordInput)
      .then(opportunity => {
        this.recordId = opportunity.id;
        this.dispatchEvent(
          new CustomEvent('recordcreated', {
            detail: { recordId: this.recordId }
          })
        );
        this.oppName = '';
        this.closeDate = '';
        this.stageName = '';
      })
      .catch(error => {
        console.error(error);
      });
  }
}