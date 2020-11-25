import * as assert from 'assert';
import { Commit, Edge } from '../src/index';

describe('Commits', () => {
  describe('Constructor', () => {
    it('should expose expected fields', () => {
      const data = { id: '1', viz: 'a' };
      const commit = new Commit(data);
      assert.deepEqual(data.id, commit.id);
      assert.deepEqual(data.viz, commit.viz);
    });
  });
});

describe('Edge', () => {
  describe('Constructor', () => {
    it('should expose expected fields', () => {
      const data = { source: '1', target: '2', ops: [] };
      const edge = new Edge(data);
      assert.deepEqual(data.source, edge.source);
      assert.deepEqual(data.target, edge.target);
      assert.deepEqual(data.ops, edge.ops);
    });
  });
});
