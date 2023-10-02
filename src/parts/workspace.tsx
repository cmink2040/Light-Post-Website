import Entry from "../theme_components/Entry";

const Workspace = () => {
    return (
        <div className="w-96 bg-zinc-800">
            <WorkspaceHeader />

            <div className="flex flex-row">
                <SetBar />
                My Workspaces
            </div>
        </div>
    );

}

type ElementProps = {
    name: string,
    location: string,
    mode: string,
    type: string,
    className: string

    label: string,
    setValue: (value: string) => void,
}

const Element = (props:ElementProps) => {

    return (
        <div className="flex flex-col items-center px-1 py-3 rounded-lg m-1 hover:bg-zinc-500 hover:cursor-pointer">
            <Entry name={props.name} location={props.location} mode={props.mode} type={props.type} className={props.className}/>
            <div className="text-[11px]">
                {props.label}
                </div>
        </div>
    );

}

const SetBar = () => {
    const imageSize = "w-5 h-5";

    return (
        <div className="flex flex-col border-r-[0.5px] border-zinc-500">
          <Element name="database" location="gicon" mode="dark" type="png" className={imageSize} label="Collections" setValue={() => {}}/>
          <Element name="database" location="gicon" mode="dark" type="png" className={imageSize} label="Environments" setValue={() => {}}/>
          <Element name="database" location="gicon" mode="dark" type="png" className={imageSize} label="Mock Server" setValue={() => {}}/>
          <Element name="database" location="gicon" mode="dark" type="png" className={imageSize} label="Monitors" setValue={() => {}}/>
          <Element name="database" location="gicon" mode="dark" type="png" className={imageSize} label="Flows" setValue={() => {}}/>
          <Element name="database" location="gicon" mode="dark" type="png" className={imageSize} label="History" setValue={() => {}}/>
          <Element name="database" location="gicon" mode="dark" type="png" className={imageSize} label="APIs" setValue={() => {}}/>


        </div>
    );

}

const WorkspaceHeader = () => {
    return (
        <div className="flex flex-row justify-between">
            <div className="text-2xl">
                Workspaces
            </div>
            <div className="flex flex-row">
                <div className="flex flex-row">
                    <div className="text-xl font-bold">
                        +
                    </div>
                    <div className="text-xl font-bold">
                        New
                    </div>
                </div>
                <div className="flex flex-row">
                <div className="text-xl font-bold">

</div>
                        <Entry name="settings" location="gicon" mode="dark" type="svg" className='w-6 h-6'/>
                   
                </div>
            </div>
        </div>
    );
}

export default Workspace
