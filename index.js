import React, {PropTypes, Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

const COLORS = {
    unchecked: '#b0d9d3',
    checked: '#27d9c1',
    uncheckedText: '#657083',
    checkedText: '#524955',
};
const internalStyles = StyleSheet.create({
    container: {
        borderWidth: 2,
        backgroundColor: '#f3f6f0',
        borderRadius: 25,
        height: 50,
        display: 'flex',
        flexDirection: 'row',
    },
    checkboxContainer: {
        marginLeft: 5,
        marginTop: 5,
        height: 36,
        width: 36,
        borderRadius: 18,
    },
    checkboxIconContainer: {
        marginLeft: 5,
        marginTop: 5,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
const ICON_SIZE = 25;

export default class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iconName: this._checkIconName(this.props.icon.name) ? this.props.icon.name : 'done',
            checked: this.props.checked
        }
    }

    onCheckBox() {
        this.setState({
            checked: !this.state.checked
        });
        !this.state.checked && this.props.onCheck();
    }

    render() {
        let containerCheckStyle = {borderColor: this.state.checked ? COLORS.checked : COLORS.unchecked};
        let checkboxContainerCheckStyle = {backgroundColor: this.state.checked ? COLORS.checked : COLORS.unchecked};
        let textColor = {color: this.state.checked ? COLORS.checkedText : COLORS.uncheckedText};
        return (
            <TouchableOpacity
                onPress={()=>this.onCheckBox()}
            >
                <View style={[internalStyles.container, containerCheckStyle]}>
                    <View style={[internalStyles.checkboxContainer, checkboxContainerCheckStyle]}>
                        <Text style={internalStyles.checkboxIconContainer}>
                            {this._getIconView()}
                        </Text>
                    </View>
                    <View style={internalStyles.textContainer}>
                        <Text style={textColor}>{this.props.text}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    _checkIconName(name) {
        return !!Icon.glyphMap[name];
    }

    _getIconView() {
        return this.state.checked
            ? <Icon name={this.state.iconName} size={ICON_SIZE} color={this.props.icon.color}/>
            : '';
    }
}

CheckBox.propTypes = {
    text: PropTypes.string.isRequired,
    onCheck: PropTypes.func.isRequired,
    checked: PropTypes.bool,
    icon: PropTypes.shape({
        name: PropTypes.string,
        color: PropTypes.string,
    })
};

CheckBox.defaultProps = {
    text: 'Default text for checkbox',
    checked: true,
    onCheck: () => {
    },
    icon: {
        name: 'done',
        color: COLORS.checkedText
    }
};
