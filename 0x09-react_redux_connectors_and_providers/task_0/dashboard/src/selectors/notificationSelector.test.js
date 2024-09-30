import { Map, fromJS } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('Notification selectors', () => {
    const initialState = Map({
        filter: 'DEFAULT',
        notifications: fromJS([
            { id: 1, isRead: true, message: 'Notification 1' },
            { id: 2, isRead: false, message: 'Notification 2' },
            { id: 3, isRead: false, message: 'Notification 3' }
        ]),
    });

    it('filterTypeSelected should return the filter value', () => {
        const filter = filterTypeSelected({ notifications: initialState });
        expect(filter).toEqual('DEFAULT');
    });

    it('getNotifications should return the list of notifications', () => {
        const notifications = getNotifications({ notifications: initialState }).toJS();
        expect(notifications).toEqual([
            { id: 1, isRead: true, message: 'Notification 1' },
            { id: 2, isRead: false, message: 'Notification 2' },
            { id: 3, isRead: false, message: 'Notification 3' }
        ]);
    });

    it('getUnreadNotifications should return only unread notifications', () => {
        const unreadNotifications = getUnreadNotifications({ notifications: initialState }).toJS();
        expect(unreadNotifications).toEqual([
            { id: 2, isRead: false, message: 'Notification 2' },
            { id: 3, isRead: false, message: 'Notification 3' }
        ]);
    });
});