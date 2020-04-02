<template>
    <div>
        <div style="margin-bottom: 16px">
            <a-button type="primary" @click="getWordsList">Lấy danh sách từ</a-button>
        </div>
        <a-table :columns="columns" :dataSource="wordsList" :loading="tableLoading"/>
    </div>
</template>

<script>
import {fireDb} from '~/plugins/firebase.js';
const columns = [
    {
        title: 'Từ',
        dataIndex: 'word',
        key: 'words',
    },
    {
        title: 'Nghĩa',
        dataIndex: 'mean',
        key: 'mean',
    },
];

export default {
    data() {
        return {
            wordsList: [],
            columns,
            tableLoading: false
        }
    },
    methods: {
        getWordsList: async function() {
            this.tableLoading = true;
            const ref = fireDb.collection("words");
			try {
                let snap = await ref.get();
                let docLength = snap.docs.length;

                let wordsList = Array.from(
                    {length: docLength}, () => snap.docs[Math.floor(Math.random() * docLength)].data()
                );
                //Tạo 1 mảng các số ngẫu nhiên từ 0 -> N - 1 (N là độ dài mảng), sau đó lấy dữ lịêu từ snapshot và đưa vào list 

                this.wordsList = wordsList;  
                this.tableLoading = false;             
			} catch(e) {
                this.tableLoading = false;
				console.error(e);
			}
        }
    }
}
</script>