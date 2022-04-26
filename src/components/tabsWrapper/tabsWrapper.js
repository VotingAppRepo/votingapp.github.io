import { Box, Tabs, Tab } from '@mui/material';
import { TabPanel } from '../../components/tabPanel';
import './tabsWrapper.scss';

export const TabsWrapper = ({currentTabIndex, getCurrentTab, setTabIndex, tabs, className}) => (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}>
        <Tabs
            orientation="vertical"
            value={currentTabIndex}
            onChange={(e, v)=>setTabIndex(v)}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'divider' }}
        >
        {tabs.map((tab, index) => (
            <Tab 
                key={index}
                label={tab} id={`vertical-tab-${index}`} 
                aria-controls={`vertical-tabpanel-${index}`}
            />
        ))}
        </Tabs>
        {tabs.map((tab, index) => (
            <TabPanel 
                className='tab-view'
                getPanel={getCurrentTab} 
                value={currentTabIndex} 
                key={index} 
                index={index}/>
            )
        )}
    </Box>
)