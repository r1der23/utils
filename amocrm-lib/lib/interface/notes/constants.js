define("lib/interface/notes/constants", ["underscore"], function(t) {
    "use strict";
    return {
        LS_LAST_TYPE: "feed_last_used_type",
        LEAD_ADDED_EVENT: 1,
        CONTACT_ADDED_EVENT: 2,
        COMPANY_ADDED_EVENT: 3,
        LEAD_UPDATED_EVENT: 4,
        CONTACT_UPDATED_EVENT: 5,
        COMPANY_UPDATED_EVENT: 6,
        LEAD_DELETED_EVENT: 7,
        CONTACT_DELETED_EVENT: 8,
        COMPANY_DELETED_EVENT: 9,
        LEAD_RESTORED_EVENT: 10,
        CONTACT_RESTORED_EVENT: 11,
        COMPANY_RESTORED_EVENT: 12,
        LEAD_RESPONSIBLE_CHANGED_EVENT: 13,
        LEAD_STATUS_CHANGED_EVENT: 14,
        LEAD_APPEARED_IN_STATUS_EVENT: 15,
        MAIL_IN_EVENT: 16,
        CALL_IN_EVENT: 17,
        SITE_VISIT_EVENT: 18,
        CHAT_EVENT: 19,
        CUSTOMER_ADDED_EVENT: 20,
        CUSTOMER_PERIOD_CHANGED_EVENT: 21,
        CUSTOMER_APPEARED_IN_PERIOD_EVENT: 22,
        CUSTOMER_NEXT_DATE_CHANGED_EVENT: 23,
        FIELD_CHANGED_EVENT: 24,
        ROBOT_ANSVER: 74,
        THEME_QUESTION: 75,
        RESPONSIBLE_CHANGED_EVENT: 25,
        TRANSACTION_ADDED_EVENT: 26,
        COMMON_NOTE_ADDED_EVENT: 27,
        ATTACHMENT_ADDED_EVENT: 28,
        TASK_COMPLETED_EVENT: 29,
        CALL_OUT_EVENT: 30,
        ADDED_TO_TARGETING_EVENT: 31,
        REMOVED_FROM_TARGETING_EVENT: 32,
        TASK_RESULT_ADDED_EVENT: 33,
        CALL_EVENT: 34,
        MAIL_EVENT: 35,
        MAIL_ATTACHMENT_EVENT: 36,
        EXTERNAL_ATTACH_EVENT: 37,
        GEO_MESSAGE_EVENT: 38,
        SERVICE_MESSAGE_EVENT: 39,
        DROPBOX_UPLOAD_EVENT: 40,
        SMS_IN_EVENT: 41,
        SMS_OUT_EVENT: 42,
        LIFEPAY_MESSAGE_CASHIER_EVENT: 57,
        TAG_ADDED: 63,
        TAG_DELETED: 64,
        PRICE_CHANGED_EVENT: 69,
        NAME_CHANGED_EVENT: 70,
        LTV_CHANGED_EVENT: 88,
        isNewAmoJoDesign: function() {
            return t.contains([4582558, 8687334, 992930, 17366887], parseInt(AMOCRM.constant("account").id))
        }
    }
});