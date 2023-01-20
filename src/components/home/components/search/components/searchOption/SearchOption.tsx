import checkIcon from '../../../../../../assets/check.svg';
import './SearchOption.css';

interface IProps {
    option: string;
    isChosen: boolean;
    onClick: (option: string) => void;
}

function SearchOption({option, isChosen, onClick}: IProps) {
    return (
        <div className={`search-option ${isChosen && 'chosen'}`} onClick={() => {onClick(option)}}>
            <span>
                <img src={checkIcon} alt="X"/>
            </span>
            {option}
        </div>
    );
}

SearchOption.defaultProps = {
    isChosen: false,
}

export default SearchOption;
