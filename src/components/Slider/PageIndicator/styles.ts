import { StyleSheet } from 'react-native';

import { IsIPhoneX } from '@common/helpers';
import { AppColors } from '@theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.transparent,
        height: IsIPhoneX() ? 75 : 45,
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: IsIPhoneX() ? 0 : 12,
    },
    leftContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        paddingLeft: 30,
    },
    rightContent: {
        flex: 1,
        paddingRight: 20,
    },
    centerContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        paddingLeft: 40,
    },
    dot: {
        backgroundColor: AppColors.black,
        borderRadius: 5,
        width: 10,
        height: 10,
        margin: 4,
    },
    nextDisabled: {
        color: AppColors.grey,
    },
    readyText: {
        color: AppColors.blue,
    },
});

export default styles;
