import React from 'react';

import { createUseStyles } from 'react-jss';
import { useIntl } from 'react-intl';

import { styles } from './dream_job_current_job_issues_styles';
import { translations } from '../../../../../../utils/enums_translations/job_issues_translations';
import { JobIssuesEnum } from '../../../../../../types/enums/job_issues/job_issues_utils';

const useStyles = createUseStyles(styles);

const DreamJobCurrentJobIssuesComponent = ({ currentJobIssues = {} }) => {
    const classes = useStyles();
    const { formatMessage } = useIntl();
    return (
        <ul className={classes.list}>
            {Object.entries(currentJobIssues)
                .filter(([, value]) => Boolean(value))
                .map(([issueId, value]) => {
                    if (!translations[issueId]) {
                        return null;
                    }
                    if (issueId === JobIssuesEnum.OTHER) {
                        return (
                            <li className={classes.listItem} key={`dream_job_current_job_issue_${issueId}`}>
                                {value}
                            </li>
                        );
                    }
                    return (
                        <li className={classes.listItem} key={`dream_job_current_job_issue_${issueId}`}>
                            {formatMessage(translations[issueId])}
                        </li>
                    );
                })}
        </ul>
    );
};

export const DreamJobCurrentJobIssues = DreamJobCurrentJobIssuesComponent;
