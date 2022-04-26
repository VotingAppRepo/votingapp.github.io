export const TabPanel = ({value, index, getPanel, className}) => (
    <div
      className={className}
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
    >
     {value === index && getPanel}
    </div>
)
