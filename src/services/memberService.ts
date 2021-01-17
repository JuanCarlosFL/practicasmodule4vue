import { Member } from '@/models/member';

const members : Member[] = [
    {
        "id": 1,
        "name": "Juan Carlos"
    },
    {
        "id": 2,
        "name": "Laura"
    },
    {
        "id": 3,
        "name": "Chloe"
    }
]

export const memberService = {
    get() {
        return members;
    }
}